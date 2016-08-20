///////////////////////
//Application Wrapper//
///////////////////////
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
      <div className="container">
        <Calendar handleDateSelectedChange={this.handleDateSelectedChange}/>
        <br/>
        <Table selected={this.state.dateSelected}/>
      </div>
    );
  }
});


///////////////////////
// Calendar  Wrapper //
///////////////////////
var Calendar = React.createClass({
  PropTypes: {
    handleDateSelectedChange : React.PropTypes.func
  },

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
      <div className="calendar .col-xs-8">
        <DisplayMonth key={this.state.displayed.format("MMM")} displayed={this.state.displayed} handleDisplayedChange={this.handleDisplayedChange}/>
        <DisplayDates displayed={this.state.displayed} selected={this.state.selected} handleSelectedChange={this.handleSelectedChange}/>
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
        <span className="glyphicon glyphicon-chevron-left arrowLeft" onClick={this.prevMonth}/>
        <span className="monthName">{this.props.displayed.format("MMMM YYYY")}</span>
        <span className="glyphicon glyphicon-chevron-right arrowRight" onClick={this.nextMonth}/>
      </div>
    );
  }

});

var DisplayDates = React.createClass({
  propTypes:{
    displayed: React.PropTypes.object,
    selected: React.PropTypes.string,
    handleSelectedChange: React.PropTypes.func
  },

  render: function(){
    let date = this.props.displayed.clone().startOf('month').startOf('week');
    var headDisplay;
    var display = [];
    var tempDisplay = [];

    headDisplay =
      <thead>
        <tr className="dayNames" key="dayNames">
            <th className="day" key="Sun">Sun</th>
            <th className="day" key="Mon">Mon</th>
            <th className="day" key="Tue">Tue</th>
            <th className="day" key="Wed">Wed</th>
            <th className="day" key="Thu">Thu</th>
            <th className="day" key="Fri">Fri</th>
            <th className="day" key="Sat">Sat</th>
        </tr>
      </thead>
    ;

    while(this.props.displayed.clone().endOf('month').isSameOrAfter(date)){
      for(var i = 0; i < 7;i++){
        if (date.format("YYYYDDMM") == this.props.selected) {
          tempDisplay.push(<td key={date.format("YYYYDDMM")} className="selectedDate" onClick={this.props.handleSelectedChange.bind(null, date.format("YYYYDDMM"))}>{date.dates()}</td>);
        } else {
          tempDisplay.push(<td key={date.format("YYYYDDMM")} className="date" onClick={this.props.handleSelectedChange.bind(null, date.format("YYYYDDMM"))}>{date.dates()}</td>);
        }
        date.add(1, "d");
      }
      display.push(<tr className="dateRow" key={date.format("DDMM")}>{tempDisplay}</tr>);
      tempDisplay = [];
    }

    return(
      <table className="calendarTable">
        {headDisplay}
        <tbody>
          {display}
        </tbody>
      </table>
    );
  }
});


///////////////////////
//       Table       //
///////////////////////
var Table = React.createClass({
  propTypes:{
    selected: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      dataPesan : [
        // {
        //   tanggal : 20160108,
        //   lapangan : [
        //     {
        //       namaLapangan : "Lapangan A",
        //       dataPemesanan : [
        //         {atasNama : "Pokemon", jam : 10},
        //         {atasNama : "Pokemon", jam : 11},
        //         {atasNama : "Aum", jam : 12}
        //       ]
        //     },
        //     {
        //       namaLapangan : "Lapangan B",
        //       dataPemesanan : [
        //         {atasNama : "Rawr", jam : 13},
        //         {atasNama : "Mumu", jam : 14},
        //         {atasNama : "Mumu", jam : 16}
        //       ]
        //     }
        //   ]
        // },
        // {
        //   tanggal : 20160208,
        //   lapangan : [
        //     {
        //       namaLapangan : "Lapangan A",
        //       dataPemesanan : [
        //         {atasNama : "Kucing", jam : 11},
        //         {atasNama : "Anjing", jam : 14},
        //         {atasNama : "Jono", jam : 18}
        //       ]
        //     },
        //     {
        //       namaLapangan : "Lapangan B",
        //       dataPemesanan : [
        //         {atasNama : "Mumu", jam : 8},
        //         {atasNama : "Mumu", jam : 9},
        //         {atasNama : "Mumu", jam : 10}
        //       ]
        //     }
        //   ]
        // }
      ],

      dataLapangan : [
        "Lapangan A",
        "Lapangan B"
      ],

      modalMessage : ""
    };
  },

  componentDidMount: function() {
    //Fetch data from database (ku belum bisa maapkan)
    //pakai data JSON dummy dulu berupa state
  },

  componentWillReceiveProps: function(nextProps) {
    let arrayIndex = -1;

    for (let i = 0; i < this.state.dataPesan.length; i++){
      if (this.state.dataPesan[i].tanggal == nextProps.selected){
        arrayIndex = i;
        break;
      }
    }

    if(arrayIndex == -1){
      let z = {
        tanggal : nextProps.selected,
        lapangan : [
          {
            namaLapangan : "Lapangan A",
            dataPemesanan : []
          },
          {
            namaLapangan : "Lapangan B",
            dataPemesanan : []
          }
        ]
      };
      this.state.dataPesan.push(z);
    }
  },

  changeModalMessage: function(string){
    this.setState({
      modalMessage : string
    });
  },

  updateOrderData: function(an, lap, jam){
    let arrayIndex = -1;

    for (let i = 0; i < this.state.dataPesan.length; i++){
      if (this.state.dataPesan[i].tanggal == this.props.selected){
        arrayIndex = i;
        break;
      }
    }

    if(arrayIndex == -1){
      let z = {
        tanggal : this.props.selected,
        lapangan : [
          {
            namaLapangan : "Lapangan A",
            dataPemesanan : []
          },
          {
            namaLapangan : "Lapangan B",
            dataPemesanan : []
          }
        ]
      };
      this.state.dataPesan.push(z);
      arrayIndex = this.state.dataPesan.length-1;
    }

    let temp = true;
    for (let i = 0; i < this.state.dataPesan[arrayIndex].lapangan[lap].dataPemesanan.length; i++){
      if (this.state.dataPesan[arrayIndex].lapangan[lap].dataPemesanan[i].jam == jam){
        temp = false;
        break;
      }
    }

    if (an != ""){
      if (temp){
        let y;
        let x = {atasNama : an, jam : jam};
        this.state.dataPesan[arrayIndex].lapangan[lap].dataPemesanan.push(x);
        this.state.dataPesan[arrayIndex].lapangan[lap].dataPemesanan.sort(function(a, b) {
          return parseFloat(a.jam) - parseFloat(b.jam);
        });
        y = this.state.dataPesan;
        this.setState({
          dataPesan: y
        });
      } else {
        this.changeModalMessage("Sudah ada yang pesan :(");
        $("#warningModal").modal("show");
      }
    } else {
      this.changeModalMessage("Nama jangan kosong pls :(");
      $("#warningModal").modal("show");
    }
  },

  render: function() {
    let table = [];
    let arrayIndex = -1;

    for (let i = 0; i < this.state.dataPesan.length; i++){
      if (this.state.dataPesan[i].tanggal == this.props.selected){
        arrayIndex = i;
        break;
      }
    }

    if(arrayIndex != -1){
      let temp = [];
      for (let i = 0; i < this.state.dataPesan[arrayIndex].lapangan.length; i++){
        let temp1 = [];

        temp1.push(<label className="namaLapangan" key={this.state.dataPesan[arrayIndex].lapangan[i].namaLapangan}>{this.state.dataPesan[arrayIndex].lapangan[i].namaLapangan}</label>);

        let temp2 = [];
        for (let j = 0; j < this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan.length; j++){
          temp2.push(
            <tr>
              <td>{this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan[j].atasNama}</td>
              <td>{this.state.dataPesan[arrayIndex].lapangan[i].dataPemesanan[j].jam}</td>
            </tr>
          );
        }

        temp1.push(
          <div>
            <table className="table table-striped table-hover">
              <thead>
                <tr className="tableHeader">
                  <th>Atas nama</th>
                  <th>Jam</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {temp2}
              </tbody>
            </table>
          </div>
        );

        temp.push(<div className="tableWithName">{temp1}</div>);

      }
      table.push(<div className="accumulatedTable">{temp}</div>);
    }

    return (
      <div>
        {table}
        <VisibleToggle buttonName="Pesan Lapangan">
          <OrderForm updateOrderData={this.updateOrderData}/>
        </VisibleToggle>

        <Modal id="warningModal" modalMessage = {this.state.modalMessage}/>
      </div>
    );
  }
});


///////////////////////
//  Visible Toggle   //
///////////////////////
var VisibleToggle = React.createClass({
  propTypes : {
    visible : React.PropTypes.bool,
    children: React.PropTypes.element.isRequired,
    buttonName : React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      visible : false,
      buttonName : "Check"
    };
  },

  getInitialState: function() {
    return {
      visible: this.props.visible
    };
  },

  handleVisibleChange: function() {
    let x = !this.state.visible;
    this.setState({
      visible : x
    });
  },

  render: function() {
    let x = (this.state.visible) ? this.props.children : "";

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleVisibleChange}>{this.props.buttonName}</button>
        {x}
      </div>
    );
  }
});

///////////////////////
//    Order  Form    //
///////////////////////
var OrderForm = React.createClass({
  getInitialState: function() {
    return {
      atasnama: "",
      lapangan: 0,
      jam: 7
    };
  },

  handleAtasNamaChange: function(event) {
    this.setState({atasnama: event.target.value});
  },

  handleLapanganChange: function(event) {
    this.setState({lapangan: event.target.value});
  },

  handleJamChange: function(event) {
    let x = event.target.value
    if (x > 20){
      x = 20;
    }
    if (x < 7){
      x = 7
    }
    this.setState({jam: x});
  },

  render: function(){
    return(
      <div className="container">
        <form>
          <label for="an">Atas Nama</label>
          <input type="text" id="an" className="form-control" name="atasnama" value={this.state.atasnama} onChange={this.handleAtasNamaChange}/>
          <br/>
          <label for="lp">Lapangan</label>
          <select id="lp" name="lapangan" className="form-control" value={this.state.lapangan} onChange={this.handleLapanganChange}>
            <option value="0">Lapangan A</option>
            <option value="1">Lapangan B</option>
          </select>
          <br/>
          <label for="jm">Jam</label>
          <input type="number" id="jm" className="form-control" name="jam" min="7" max="20" value={this.state.jam} onChange={this.handleJamChange}/>
          <br/>
    		</form>
        <button className="btn btn-default" onClick = {this.props.updateOrderData.bind(null, this.state.atasnama, this.state.lapangan, this.state.jam)}>Pesan!</button>
    </div>
    );
  }
});


///////////////////////
//       Modal       //
///////////////////////
var Modal = React.createClass({
  propTypes : {
    modalMessage : React.PropTypes.string,
    id : React.PropTypes.string.isRequired
  },

  closeModal: function(){
    $("#" + this.props.id).modal("hide");
  },

  render: function() {
    return (
      <div className="modal fade" id={this.props.id} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" type="button" onClick={this.closeModal}>&times;</button>
              <h4 className="modal-title">Input yang serius pls</h4>
            </div>
            <div className="modal-body">
              <p>{this.props.modalMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


///////////////////////
//    DOM  Render    //
///////////////////////
ReactDOM.render(
  <App />,
  document.getElementById('theo')
);
