console.log(
  '%c' +
    ' __      __  ______   __  __   ______     ' +
    '\n' +
    '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
    '\n' +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    '\n' +
    ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
    '\n' +
    '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
    '\n' +
    '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
    '\n' +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  'color: #d81b60; font-size: 16px; font-weight: bold;',
);

// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
  // 댓글 제출 버튼 이벤트 추가
  const submitButton = document.getElementById('submit-button');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.querySelector('.comment-list');

  submitButton.addEventListener('click', () => {
    // 댓글 내용이 비어있지 않은 경우에만 처리
    if (commentInput.value.trim() !== '') {
      // 새 댓글 요소 생성
      const newComment = document.createElement('li');

      // 댓글 HTML 구조 생성
      newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentInput.value}
          </div>
        </div>
      `;

      // 댓글 목록 맨 위에 새 댓글 추가
      commentList.prepend(newComment);

      // 폼 초기화
      commentForm.reset();

      // 알림 메시지 표시
      alert('댓글이 등록되었습니다.');
    } else {
      alert('댓글 내용을 입력해주세요.');
    }
  });

  // 이미지 로딩 에러 처리
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      this.src = 'https://via.placeholder.com/300?text=이미지+로딩+실패';
    });
  });
});
