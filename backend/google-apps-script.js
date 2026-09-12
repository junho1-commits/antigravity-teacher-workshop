/**
 * ====================================================================
 * 🚀 초등 안티그래비티 연수용: 구글 시트 실시간 랭킹전 백엔드 스크립트
 * ====================================================================
 * 
 * [초간단 1분 사용법]
 * 1. 구글 스프레드시트(새 시트)를 하나 생성합니다.
 * 2. 상단 메뉴 [확장 프로그램] > [Apps Script]를 클릭합니다.
 * 3. 기존 코드를 모두 지우고 이 파일의 전체 코드를 복사해서 붙여넣습니다.
 * 4. 상단 [저장(💾)] 아이콘 클릭 후, 우측 상단 [배포] > [새 배포] 클릭
 *    - 유형: [웹 앱] 선택
 *    - 설명: 랭킹전 API v1
 *    - 다음 사용자로 실행: [나]
 *    - 액세스 권한이 있는 사용자: [모든 사용자 (Anyone)] ★필수★
 * 5. 발급된 [웹 앱 URL] (https://script.google.com/macros/s/.../exec)을 복사하여
 *    연수 슬라이드 16의 [⚙️ 시트 설정]에 붙여넣으면 끝!
 */

// 1. 데이터 조회 (GET) & GET 방식 점수 등록 지원
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // 시트가 완전히 비어있다면 헤더 자동 생성
  if (sheet.getLastRow() === 0) {
    initSheetHeaders(sheet);
  }

  // GET 파라미터로 점수 등록이 요청된 경우 지원 (?name=홍길동&score=100)
  if (e && e.parameter && e.parameter.name && e.parameter.score !== undefined) {
    var pName = String(e.parameter.name || '익명').trim();
    var pScore = Number(e.parameter.score || 0);
    appendRecord(sheet, pName, pScore);
  }

  // 데이터 읽기
  var lastRow = sheet.getLastRow();
  var rows = [];

  if (lastRow > 1) {
    // 2행부터 마지막 행까지 읽기 (1행은 헤더)
    var range = sheet.getRange(2, 1, lastRow - 1, 3);
    var values = range.getValues();

    for (var i = 0; i < values.length; i++) {
      var rowTime = values[i][0];
      var timeStr = "";
      if (rowTime instanceof Date) {
        timeStr = Utilities.formatDate(rowTime, "Asia/Seoul", "HH:mm:ss");
      } else {
        timeStr = String(rowTime || "");
      }

      var rowName = String(values[i][1] || "익명");
      var rowScore = Number(values[i][2] || 0);

      if (rowName !== "" || rowScore > 0) {
        rows.push({
          id: i + 1,
          time: timeStr,
          name: rowName,
          score: rowScore
        });
      }
    }
  }

  // 1) 리더보드 계산 (점수 내림차순 정렬)
  var sorted = rows.slice().sort(function(a, b) {
    return b.score - a.score;
  });

  var badges = ['🥇', '🥈', '🥉', '4위', '5위'];
  var leaderboard = sorted.slice(0, 10).map(function(item, idx) {
    return {
      rank: idx + 1,
      badge: badges[idx] || (idx + 1 + '위'),
      name: item.name,
      score: item.score,
      time: item.time
    };
  });

  // 2) 최근 수신 내역 (최신 등록 순 10건)
  var recentRows = rows.slice(-10).reverse();

  var responseData = {
    status: "success",
    totalCount: rows.length,
    leaderboard: leaderboard,
    recentRows: recentRows,
    updatedAt: Utilities.formatDate(new Date(), "Asia/Seoul", "HH:mm:ss")
  };

  return ContentService.createTextOutput(JSON.stringify(responseData))
    .setMimeType(ContentService.MimeType.JSON);
}

// 2. 데이터 등록 (POST)
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  if (sheet.getLastRow() === 0) {
    initSheetHeaders(sheet);
  }

  var name = "익명";
  var score = 0;

  try {
    if (e && e.postData && e.postData.contents) {
      var payload = JSON.parse(e.postData.contents);
      name = payload.name || name;
      score = Number(payload.score || 0);
    } else if (e && e.parameter) {
      name = e.parameter.name || name;
      score = Number(e.parameter.score || 0);
    }
  } catch (err) {
    if (e && e.parameter) {
      name = e.parameter.name || name;
      score = Number(e.parameter.score || 0);
    }
  }

  name = String(name).trim() || "익명";
  score = Number(score) || 0;

  var addedRow = appendRecord(sheet, name, score);

  var result = {
    status: "success",
    message: "성공적으로 등록되었습니다.",
    record: {
      time: addedRow.time,
      name: name,
      score: score
    }
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// 행 추가 보조 함수
function appendRecord(sheet, name, score) {
  var now = new Date();
  var timeStr = Utilities.formatDate(now, "Asia/Seoul", "HH:mm:ss");
  var fullTimeStr = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  
  sheet.appendRow([fullTimeStr, name, score]);

  // 최신 행 서식 자동 지정
  var lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
  sheet.getRange(lastRow, 2).setHorizontalAlignment("center");
  sheet.getRange(lastRow, 3).setHorizontalAlignment("right").setNumberFormat("#,##0");

  return { time: timeStr, name: name, score: score };
}

// 시트 헤더 초기화 보조 함수
function initSheetHeaders(sheet) {
  sheet.setName("학급랭킹DB");
  sheet.getRange(1, 1, 1, 3).setValues([["등록시간", "참가자 이름", "점수"]]);
  
  // 헤더 스타일 꾸미기
  var header = sheet.getRange(1, 1, 1, 3);
  header.setBackground("#1e293b");
  header.setFontColor("#f8fafc");
  header.setFontWeight("bold");
  header.setHorizontalAlignment("center");
  sheet.setColumnWidth(1, 180);
  sheet.setColumnWidth(2, 140);
  sheet.setColumnWidth(3, 100);
}
