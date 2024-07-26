import { createRef } from 'react';
import { makeAutoObservable } from 'mobx';

export class NavigationStore {
  sectionRefs = {
    home: createRef<HTMLElement>(),
    about: createRef<HTMLElement>(),
    features: createRef<HTMLElement>(),
  };

  constructor() {
    makeAutoObservable(this);
  }

  scrollToSection(sectionIdentifier: keyof typeof this.sectionRefs): void {
    this.sectionRefs[sectionIdentifier].current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
