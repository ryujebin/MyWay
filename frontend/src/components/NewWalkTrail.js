import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function NewWalkTrail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const { path, totalDistance, walkTime } = location.state || {};

  const onSubmit = (data) => {
    console.log(data);
    console.log("Path:", path);
    console.log("Total Distance:", totalDistance);
    console.log("Walk Time:", walkTime);
    // 서버에 데이터를 전송하는 로직을 추가하세요.
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
