import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { TweenMax, TweenLite } from 'gsap';

import Home from '@/pages/Home';

const Routes = () => ({
  render() {
    const { pathname } = this.props.location;

    return (
      <TransitionGroup component={null}>
        <Transition
          key={`${process.env.PUBLIC_URL}${pathname}`}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={(node) => {
            TweenMax.killTweensOf(node);
            TweenLite.set(node, {
              x: 20,
              autoAlpha: 0,
            });

            TweenLite.to(node, 0.4, {
              autoAlpha: 1,
              x: 0,
              delay: 0.4,
            });
          }}
          onExit={(node) => {
            TweenMax.killTweensOf(node);
            TweenLite.to(node, 0.4, {
              opacity: 0,
              x: -20,
            });
          }}
        >
          <Switch location={this.props.location}>
            <Route render={() => <Home />} />
          </Switch>
        </Transition>
      </TransitionGroup>
    );
  },
});

export default withRouter(Routes);
