var App = React.createClass({
  getInitialState: function() {
    return {
      dateSelected: null
    };
  },

  handleDateSelectedChange: function(dateSelected) {
    this.setState({
      dateSelected: dateSelected
    });
  },

  render: function() {
    return (
      <div>
        <Calendar handleDateSelectedChange={this.handleDateSelectedChange}/>
        <br/>
        <Table selected={this.state.dateSelected}/>
      </div>
    );
  }
});

var Calendar = React.createClass({
  getInitialState: function() {
    return {
      displayed: new moment(),
      selected: null
    };
  },

  componentWillMount: function() {
    this.setState({
      selected: this.state.displayed.format("YYYYDDMM")
    });
    this.props.handleDateSelectedChange(this.state.displayed.format("YYYYDDMM"));
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
    this.props.handleDateSelectedChange(selected)
  },

  render: function(){

    return(
      <div className="calendar">
        <DisplayMonth key={this.state.displayed.format("MMM")} displayed={this.state.displayed} handleDisplayedChange={this.handleDisplayedChange}/>
        <DisplayDates displayed={this.state.displayed} handleSelectedChange={this.handleSelectedChange}/>
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

var DisplayDates = React.createClass({
  render: function(){
    let date = this.props.displayed.clone().startOf('month').startOf('week');
    var display = [];
    var tempDisplay = [];

    display.push(
      <tr className="dayNames">
          <th className="day">Sun</th>
          <th className="day">Mon</th>
          <th className="day">Tue</th>
          <th className="day">Wed</th>
          <th className="day">Thu</th>
          <th className="day">Fri</th>
          <th className="day">Sat</th>
      </tr>
    );

    while(this.props.displayed.clone().endOf('month').isSameOrAfter(date)){
      for(var i = 0; i < 7;i++){
        tempDisplay.push(<td key={date.format("YYYYDDMM")} className="date" onClick={this.props.handleSelectedChange.bind(null, date.format("YYYYDDMM"))}>{date.dates()}</td>);
        date.add(1, "d");
      }
      display.push(<tr className="dateRow">{tempDisplay}</tr>);
      tempDisplay = [];
    }

    return(
      <table className="calendarTable">
        <tbody>
          {display}
        </tbody>
      </table>
    );
  }
});

var Table = React.createClass({
  propTypes:{
    selected: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      dataPesan : [
        {
          tanggal : 20160108,
          lapangan : [
            {
              namaLapangan : "Lapangan A",
              dataPemesanan : [
                {atasNama : "Pokemon", jam : 10},
                {atasNama : "Pokemon", jam : 11},
                {atasNama : "Aum", jam : 12}
              ]
            },
            {
              namaLapangan : "Lapangan B",
              dataPemesanan : [
                {atasNama : "Rawr", jam : 13},
                {atasNama : "Mumu", jam : 14},
                {atasNama : "Mumu", jam : 16}
              ]
            }
          ]
        },
        {
          tanggal : 20160208,
          lapangan : [
            {
              namaLapangan : "Lapangan A",
              dataPemesanan : [
                {atasNama : "Kucing", jam : 11},
                {atasNama : "Anjing", jam : 14},
                {atasNama : "Jono", jam : 18}
              ]
            },
            {
              namaLapangan : "Lapangan B",
              dataPemesanan : [
                {atasNama : "Mumu", jam : 8},
                {atasNama : "Mumu", jam : 9},
                {atasNama : "Mumu", jam : 10}
              ]
            }
          ]
        }
      ],

      dataLapangan : [
        "Lapangan A",
        "Lapangan B"
      ]
    };
  },

  componentDidMount: function() {
    //Fetch data from database (ku belum bisa maapkan)
    //pakai data JSON dummy dulu berupa state
  },

  render: function() {
    let selected = this.props.selected;
    let table = [];
    let arrayIndex = -1;

    for (let i = 0; i < this.state.dataPesan.length; i++){
      if (this.state.dataPesan[i].tanggal == selected){
        arrayIndex = i;
        break;
      }
    }

    if(arrayIndex != -1){
      let temp = [];
      for (let i = 0; i < this.state.dataPesan[arrayIndex].lapangan.length; i++){
        let temp1 = [];

        temp1.push(<div className="namaLapangan">{this.state.dataPesan[arrayIndex].lapangan[i].namaLapangan}</div>)

        let temp2 = []
        for (let j = 0; j < this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan.length; j++){
          temp2.push(
            <tr>
            <td>{this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan[j].atasNama}</td>
            <td>{this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan[j].jam}</td>
            </tr>
          )
        }
        temp1.push(<div><table><tbody>{temp2}</tbody></table></div>)

        temp.push(<div className="table">{temp1}</div>)

      }
      table.push(<div className="accumulatedTable">{temp}</div>)
    }

    return (
      <div>
        {selected}
        <br/>
        {table}
      </div>
    );
  }
});

ReactDOM.render(
    <App />,
    document.getElementById('theo')
);
