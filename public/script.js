const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionComponent() {
   return <h1>Hello!</h1>;
}

class ClassComponent extends React.Component {
   render() {
      let tag = "h"+{this.props.size};
      return <tag>This is the Second Part</tag>;
   }
}

let page = <>
   <FunctionComponent/>
   <ClassComponent size="2"/>
</>;

root.render(page);
