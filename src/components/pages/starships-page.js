import React from 'react';
import { StarshipList } from '../sw-components';
//import Row from '../row';
import { withRouter } from "react-router-dom";


const StarshipsPage = ( { history }) => {
  return (
      <StarshipList onItemSelected = { (itemId) => {
        // const newPath = `/starships/${itemId}`;
        const newPath = itemId;
        history.push(newPath);
      }} />
  )
}

export default withRouter(StarshipsPage);

// export default class StarshipsPage1 extends Component {
//
//   state = {
//     selectedItem: null
//   };
//
//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   };
//
//   render() {
//     const { selectedItem } = this.state;
//
//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />} />
//     );
//   }
// }