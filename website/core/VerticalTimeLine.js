const React = require('react');


class VerticalTimeLine extends React.Component {
  render() {

    const TimeLineBlock = props => (
      <div class="cd-timeline__block">
        <div class="cd-timeline__img cd-timeline__img--picture"
          style={{backgroundColor: props.color }}>
          <span class="number">{props.number}</span>
          { /* <img src={props.icon} alt={props.alt}/> */ }
        </div>
        <div class="cd-timeline__content text-component">
          <h2>{props.title}</h2>
          <div class="text-box" dangerouslySetInnerHTML={{__html: props.content}}></div>
        </div>
        <div class="flex justify-between items-center">
        </div>
      </div>
    );

    const items = this.props.contents.map(
      (item, index) =>
        <TimeLineBlock
          number={index+1}
          alt={item.alt||''}
          title={item.title}
          color={item.color}
          content={item.content} />
    )

    return (
      <section class="cd-timeline js-cd-timeline">
        <div class="cd-timeline__container">
          {items}
        </div>
      </section>
    );
  }
}

module.exports = VerticalTimeLine;