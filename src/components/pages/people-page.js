import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { withRouter } from "react-router-dom";

// export default class PeoplePage1 extends Component {
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
//         left={<PersonList onItemSelected={this.onItemSelected} />}
//         right={<PersonDetails itemId={selectedItem} />} />
//     );
//   }
//
// }

const PeoplePage = ( { history, match } ) => {
  const { id } = match.params;

  return (
      <Row
          left={<PersonList onItemSelected={ (id) => history.push(id)} />}
          right={<PersonDetails itemId={id} />} />
  )
}

export  default withRouter(PeoplePage);