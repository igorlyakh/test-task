import { tags } from '@utils/tags';
import { StyledTag, TagWrapper } from './Tag.styled';

import sprite from '@icons/sprite.svg';

const Tag = () => {
  return (
    <TagWrapper>
      {tags.map((item, index) => {
        return (
          <StyledTag key={index}>
            <svg
              width="20"
              height="20"
              fill={item.fill}
              stroke={item.stroke}
            >
              <use href={`${sprite}#${item.icon}`} />
            </svg>
            <span>{item.text}</span>
          </StyledTag>
        );
      })}
    </TagWrapper>
  );
};

export default Tag;
