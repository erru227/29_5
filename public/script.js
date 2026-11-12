const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionComponent() {
   return <h1>Hello!</h1>;
}

class ClassComponent extends React.Component {
   render() {
      let Tag = "h"+this.props.size;
      return <Tag>This is the Second Part</Tag>;
   }
}

let page = <>
   <FunctionComponent/>
   <ClassComponent size="2"/>
</>;

root.render(page);
