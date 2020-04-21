import React from 'react';
import s from './Blog.module.css';

export const Blog = () => {
  return (
    <div className={s.main_container}>
      <div className={s.info_container}>
        <div className={s.photo}>
          <img
            alt="photo_1"
            src="https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1440557653082-e8e186733eeb-1.jpg"
          />
        </div>
        <div className={s.text}>
          <div className={s.title}>Template: More Tag</div>
          <div className={s.article}>
            March 15, 2016by Aigars This content is before the more tag. Right
            after this sentence should be a "continue reading" button of some
            sort. And this content is after the more tag.
          </div>
        </div>
      </div>
      <div className={s.info_container}>
        <div className={s.photo}>
          <img
            alt="photo_2"
            src="https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1453282716202-de94e528067c-1.jpg"
          />
        </div>
        <div className={s.text}>
          <div className={s.title}>Template: Sticky</div>
          <div className={s.article}>
            January 7, 2016by Aigars This is a sticky post. There are a few
            things to verify: The sticky post should be distinctly recognizable
            in some way in comparison to normal posts.
          </div>
        </div>
      </div>
      <div className={s.list_container}>
        <div className={s.title}></div>
        <div className={s.list_item}></div>
      </div>
    </div>
  );
};
