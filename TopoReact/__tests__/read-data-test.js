import React from 'react';
import renderer from 'react-test-renderer';

import SecteurData from '../util/SecteurData';




describe('go', () => {

  beforeEach(() => {
 //   NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    let secteur = SecteurData.getData(  );
    console.log("secteur "+secteur)
    expect(secteur.id).toBeDefined();

  });



});
