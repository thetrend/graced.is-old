import Header from './Header';

type Props = {
  children: Array<JSX.Element>,
};

const Template = ({ children }: Props) => {
  return (
    <div id="blog-container">
      <Header />
      <div className="content-container">
        {children}
      </div>
    </div>
  )
};

export default Template;