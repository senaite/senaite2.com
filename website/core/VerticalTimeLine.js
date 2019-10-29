const React = require('react');

class VerticalTimeLine extends React.Component {
  render() {

    const TimeLineBlock = props => (
      <div class="cd-timeline__block">
        <div class="cd-timeline__img cd-timeline__img--picture">
          <img src={props.icon} alt={props.alt}/>
        </div>
        <div class="cd-timeline__content text-component">
          <h2>{props.title}</h2>
          <p class="color-constrat-medium">{props.content}</p>
        </div>
        <div class="flex justify-between items-center">
        </div>
      </div>
    );

    const items = this.props.contents.map(
      (item, index) =>
        <TimeLineBlock
          icon={item.icon}
          alt={item.alt||''}
          title={item.title}
          content={item.content} />
    )

    return (
      <section class="cd-timeline js-cd-timeline">
        <div class="container max-width-lg cd-timeline__container">
          {items}
        </div>
      </section>
    );
  }
}

module.exports = VerticalTimeLine;