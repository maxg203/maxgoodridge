import React from 'react';

import './Timeline.css';


class Timeline extends React.Component {
  state = {
    scrollY: 0,
  }

  onScroll = () => {
    const isBottom = (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 2
    console.log(isBottom);
    if (isBottom) {
        this.setState({ scrollY: window.scrollY + (window.innerHeight - 500) })
    } else {
        this.setState({ scrollY: window.scrollY })
    }

    document.documentElement.style.setProperty('--sy', `${this.state.scrollY}px`);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <section className="timeline">
        <div className="timeline-scrollable">
          <div className="container" onScroll={() => this.onScroll()}>
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInLeft">
                <h2>Title</h2>
                <div className="date">1 MAY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h2>Card Title</h2>
                </div>
                <div className="date">25 MAY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInLeft">
                <div className="date">3 JUN 2016</div>
                <h2>Quote</h2>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInRight">
                <h2>Title</h2>
                <div className="date">22 JUN 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInLeft">
                <div className="timeline-img-header">
                  <h2>Card Title</h2>
                </div>
                <div className="date">10 JULY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h2>Card Title</h2>
                </div>
                <div className="date">30 JULY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInLeft">
                <div className="date">5 AUG 2016</div>
                <h2>Quote</h2>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                  <h2>Card Title</h2>
                </div>
                <div className="date">19 AUG 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>

            <div className="timeline-item">

              <div className="timeline-img"></div>

              <div className="timeline-content js--fadeInLeft">
                <div className="date">1 SEP 2016</div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="call-to-action" href="javascript:void(0)">More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Timeline;
