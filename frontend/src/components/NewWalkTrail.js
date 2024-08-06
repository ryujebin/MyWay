import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function NewWalkTrail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const { path, totalDistance, walkTime } = location.state || {};

  const onSubmit = async (data) => {
    const formData = new FormData();
    
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image[0]); // 파일 객체는 배열 형태로 제공됩니다.

    // 추가 정보 추가 (선택 사항)
    formData.append('path', path);
    formData.append('totalDistance', totalDistance);
    formData.append('walkTime', walkTime);

    try {
      const response = await fetch('http://localhost:5000/api/paths/save_path', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('데이터가 성공적으로 전송되었습니다.');
        // 폼 제출 후 추가 작업이 필요하다면 여기에 추가하세요 (예: 성공 메시지, 리디렉션 등)
      } else {
        console.error('서버 응답 오류:', response.statusText);
      }
    } catch (error) {
      console.error('서버와의 통신 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <main>      
        <section className="main-container">  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="title">제목</label>
              <input
                id="title"
                {...register('title', { required: '제목은 필수 입력 항목입니다.' })}
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="description">내용</label>
              <textarea
                id="description"
                {...register('description', { required: '내용은 필수 입력 항목입니다.' })}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
              <label htmlFor="image">사진</label>
              <input
                type="file"
                id="image"
                {...register('image', { required: '사진은 필수 입력 항목입니다.' })}
              />
              {errors.image && <p>{errors.image.message}</p>}
            </div>
            <button type="submit">등록</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default NewWalkTrail;
