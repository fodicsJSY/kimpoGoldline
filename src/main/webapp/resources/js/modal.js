// 모달 열기 버튼과 모달 닫기 버튼 요소 가져오기
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// 모달 요소 가져오기
var modal = document.getElementById('myModal');

// 모달 열기 버튼에 이벤트 리스너 추가
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// 모달 닫기 버튼에 이벤트 리스너 추가
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 모달 외부를 클릭하면 모달이 닫히도록 설정
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
