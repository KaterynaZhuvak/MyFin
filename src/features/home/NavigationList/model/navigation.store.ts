import { createRef } from 'react';
import { makeAutoObservable } from 'mobx';
import { type Location, type NavigateFunction } from 'react-router';

export class NavigationStore {
  sectionRefs = {
    home: createRef<HTMLElement>(),
    about: createRef<HTMLElement>(),
    features: createRef<HTMLElement>(),
  };

  constructor() {
    makeAutoObservable(this);
  }

  scrollToSection(
    location: Location,
    navigate: NavigateFunction,
    sectionIdentifier: keyof typeof this.sectionRefs
  ): void {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionIdentifier } });
    } else {
      this.sectionRefs[sectionIdentifier].current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
