import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './asset/section/header';
import Footer from './asset/section/footer';


function NewWalkTrail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // 서버에 데이터를 전송하는 로직을 추가하세요.
  };

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default NewWalkTrail;
