import Template from '../themes/2022/Template';
import Post from './Post';

export const Blog = () => {
  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  let itemList: Array<JSX.Element> = [];
  items.forEach((item, index) => {
    itemList.push(
      <Post key={index} />
    );
  });

  return (
    <Template>
      {itemList}
    </Template>
  );
};
