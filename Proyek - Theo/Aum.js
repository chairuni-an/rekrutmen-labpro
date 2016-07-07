var Calendar = React.createClass({
  getInitialState: function() {
    return {
      displayed: new moment(),
      selected: null
    };
  },

  componentWillMount: function() {
    this.setState({
      selected: this.state.displayed.format()
    });
  },

  handleDisplayedChange: function(displayed){
    this.setState({
      displayed: displayed
    });
  },

  handleSelectedChange: function(selected){
    this.setState({
      selected: selected
    });
  },

  render: function(){

    return(
      <div className="calendar">
        <DisplayMonth key={this.state.displayed.format("MMM")} displayed={this.state.displayed} handleDisplayedChange={this.handleDisplayedChange}/>
        <DayNames />
        <DisplayDates displayed={this.state.displayed} handleSelectedChange={this.handleSelectedChange}/>
        {this.state.selected}
      </div>
    );
  }
});

var DisplayMonth = React.createClass({

  propTypes:{
    displayed: React.PropTypes.object,
    handleSelectedChange: React.PropTypes.func
  },

  prevMonth: function(){
    let temp = this.props.displayed.clone();

    temp.subtract(1, "M");

    this.props.handleDisplayedChange(temp);
  },

  nextMonth: function(){
    let temp = this.props.displayed.clone();

    temp.add(1, "M");

    this.props.handleDisplayedChange(temp);
  },

  render: function() {
    return (
      <div className="calendarHeader">
        <span> <button onClick={this.prevMonth}>Kiri</button> </span>
        <span className="monthName">{this.props.displayed.format("MMMM YYYY")}</span>
        <span> <button onClick={this.nextMonth}>Kanan</button> </span>
      </div>
    );
  }

});

var DayNames = React.createClass({
  render: function() {
    return (
      <div className="weekNames">
          <span className="day">Sun</span>
          <span className="day">Mon</span>
          <span className="day">Tue</span>
          <span className="day">Wed</span>
          <span className="day">Thu</span>
          <span className="day">Fri</span>
          <span className="day">Sat</span>
      </div>
    );
  }
});

var DisplayDates = React.createClass({
  render: function(){
    let date = this.props.displayed.clone().startOf('month').startOf('week');
    var display = [];
    var tempDisplay = [];

    while(this.props.displayed.clone().endOf('month').isSameOrAfter(date)){
      for(var i = 0; i < 7;i++){
        tempDisplay.push(<span key={date.format("DD MM YY")} onClick={this.props.handleSelectedChange.bind(null, date.format())}>{date.dates()}</span>);
        date.add(1, "d");
      }
      display.push(<div>{tempDisplay}</div>);
      tempDisplay = [];
    }

    return(
      <div>
        {display}
      </div>
    );
  }
});

ReactDOM.render(
    <Calendar />,
    document.getElementById('theo')
);
