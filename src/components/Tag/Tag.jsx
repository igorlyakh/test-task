import { tags } from '@utils/tags';
import { StyledTag, TagWrapper } from './Tag.styled';

const Tag = () => {
  return (
    <TagWrapper>
      {tags.map((item, index) => {
        return (
          <StyledTag key={index}>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </StyledTag>
        );
      })}
    </TagWrapper>
  );
};

export default Tag;
