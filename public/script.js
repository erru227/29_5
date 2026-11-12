const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionComponent() {
   return <h1>Hello!</h1>;
}

class ClassComponent extends React.Component {
   render() {
      return <h{this.props.size}>This is the Second Part</h{this.props.size}>;
   }
}

let page = <>
   <FunctionComponent/>
   <ClassComponent size="2"/>
</>;

root.render(page);