import "./Article.css";
function Article(props) {
  return <article className="Article"> {props.children}</article>;
}

export default Article;
