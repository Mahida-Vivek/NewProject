import React from 'react';
import './Registration.css';
// import {Link, withRouter } from 'react-router-dom';
import Login from './Login';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';


class Registration extends React.Component {
    constructor(props) {

      super(props);
     

      this.state = {
        countries : [],
       // states : [],
        cities : [],
       
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
     
      this.changeCountry = this.changeCountry.bind(this);
      this.changeState = this.changeState.bind(this);
    };

    componentDidMount() {
      this.setState({
        countries : [
           {name: 'Andhra Pradesh', cities: ["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","SriPotti Sri Ramulu Nellore","Vishakhapatnam","Vizianagaram","West Godavari","Cudappah"]},
           {name: 'Arunachal Pradesh', cities: ["Anjaw","Changlang","Dibang Valley","East Siang","East Kameng","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Papum Pare","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"]},
           {name: 'Assam', cities: ["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dima Hasao","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Jorhat",
           "Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","Tinsukia","Udalguri"]} ,
           {name: 'Bihar', cities:["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui",
           "Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},
           {name:'Chhattisgarh' , cities:["Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Jashpur","Janjgir-Champa","Korba","Koriya","Kanker","Kabirdham (formerly Kawardha)","Mahasamund","Narayanpur","Raigarh","Rajnandgaon","Raipur","Surajpur","Surguja"]},
           {name:'Dadra and Nagar Haveli', cities:["Amal","Silvassa"]},
           {name:'Daman and Diu' , cities:["Daman","Diu"]},
           {name:'Delhi' , cities:["Delhi","New Delhi","North Delhi","Noida","Patparganj","Sonabarsa","Tughlakabad"]},
           {name: 'Goa', cities:["Chapora","Dabolim","Madgaon","Marmugao (Marmagao)","Panaji Port","Panjim","Pellet Plant Jetty/Shiroda","Talpona","Vasco da Gama"]},
           {name: 'Gujarat', cities:["Ahmedabad","Amreli district","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Dahod","Dang","Gandhinagar","Jamnagar","Junagadh","Kutch","Kheda","Mehsana","Narmada","Navsari","Patan","Panchmahal","Porbandar","Rajkot","Sabarkantha","Surendranagar","Surat","Tapi","Vadodara","Valsad"]},
           {name: 'Haryana', cities:["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar"]},
           {name:'Himachal Pradesh' , cities:["Baddi","Baitalpur","Chamba","Dharamsala","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul & Spiti","Mandi","Simla","Sirmaur","Solan","Una"]},
           {name: 'Jammu and Kashmir', cities:["Jammu","Leh","Rajouri","Srinagar"]},
           {name: 'Jharkhand', cities:["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","EastSinghbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum"]},
           {name: 'Karnataka', cities:["Bagalkot","Bangalore","BangaloreUrban","Belgaum","Bellary","Bidar","Bijapur","Chamarajnagar","Chikkamagaluru","Chikkaballapur","Chitradurga","Davanagere","Dharwad","Dakshina Kannada","Gadag","Gulbarga","Hassan","Haveri district","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Uttara Kannada","Ramanagara","Yadgir"]},
           {name: 'Kerala', cities:["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thrissur","Thiruvananthapuram","Wayanad"]},
           {name: 'Madhya Pradesh', cities:["Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhilai","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Dewas","Dhar","Guna","Gwalior","Hoshangabad","Indore","Itarsi","Jabalpur","Khajuraho","Khandwa","Khargone","Malanpur","Malanpuri(Gwalior)","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Pithampur","Raipur","Raisen","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Singrauli","Ujjain"]},
           {name: 'Maharashtra', cities:["Ahmednagar","Akola","Alibag","Amaravati","Arnala","Aurangabad","Aurangabad","Bandra","Bassain","Belapur","Bhiwandi","Bhusaval","BorliaiMandla","Chandrapur","Dahanu","Daulatabad","Dighi (Pune)","Dombivali","Goa","Jaitapur","Jalgaon","Jawaharlal Nehru (Nhava Sheva)","Kalyan","Karanja","Kelwa","Khopoli","Kolhapur","Lonavale","Malegaon","Malwan","Manori","Mira Bhayandar","Miraj","Mumbai(exBombay)","Murad","Nagapur","Nagpur","Nalasopara","Nanded","Nandgaon","Nasik","Navi Mumbai","Nhave","Osmanabad","Palghar","Panvel","Pimpri","Pune","Ratnagiri","Sholapur","Shrirampur","Shriwardhan","Tarapur","Thana","Thane","Trombay","Varsova","Vengurla","Virar","Wada"]},
           {name: 'Manipur', cities:["Bishnupur","Churachandpur","Chandel","Imphal East","Senapati","Tamenglong","Thoubal","Ukhrul","Imphal West"]},
           {name: 'Meghalaya', cities:["Baghamara","Balet","Barsora","Bolanganj","Dalu","Dawki","Ghasuapara","Mahendraganj","Moreh","Ryngku","Shella Bazar","Shillong"]},
           {name:'Mizoram' , cities:["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},
           {name:'Nagaland' , cities:["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},
           {name:'Orissa' , cities:["Bahabal Pur","Bhubaneswar","Chandbali","Gopalpur","Jeypore","Paradip Garh","Puri","Rourkela"]},
           {name: 'Puducherry', cities:["Karaikal","Mahe","Pondicherry","Yanam"]},
           {name: 'Punjab', cities:["Amritsar","Barnala","Bathinda","Firozpur","Faridkot","Fatehgarh Sahib","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot","Patiala","Rupnagar","Ajitgarh (Mohali)","Sangrur","Shahid Bhagat Singh Nagar","Tarn Taran"]},
           {name:'Rajasthan' , cities:["Ajmer","Banswara","Barmer","Barmer Rail Station","Basni","Beawar","Bharatpur","Bhilwara","Bhiwadi","Bikaner","Bongaigaon","Boranada,Jodhpur","Chittaurgarh","Fazilka","Ganganagar","Jaipur","Jaipur-Kanakpura", "Jaipur-Sitapura","Jaisalmer","Jodhpur","Jodhpur-Bhagat Ki Kothi","Jodhpur-Thar","Kardhan","Kota","Munabao Rail Station","Nagaur","Rajsamand","Sawaimadhopur","Shahdol","Shimoga","Tonk","Udaipur"]},
           {name: 'Tamil Nadu', cities:["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mandapam","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Thiruvallur","Tirupur","Tiruchirapalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvannamalai","Vellore","Villupuram","Viruthunagar"]},
           {name: 'Telangana', cities:["Adilabad","Hyderabad","Karimnagar","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ranga Reddy","Warangal"]},
           {name:'Tripura', cities:["Agartala","Dhalaighat","Kailashahar","Kamalpur","Kanchanpur","Kel Sahar Subdivision","Khowai","Khowaighat","Mahurighat","Old Raghna Bazar","Sabroom","Srimantapur"]},
           {name:'Uttar Pradesh' , cities:["Agra","Allahabad","Auraiya","Banbasa","Bareilly","Berhni","Bhadohi","Dadri","Dharchula","Gandhar","Gauriphanta","Ghaziabad","Gorakhpur","Gunji","Jarwa","Jhulaghat (Pithoragarh)","Kanpur","Katarniyaghat","Khunwa","Loni","Lucknow","Meerut","Moradabad","Muzaffarnagar","Nepalgunj Road","Pakwara (Moradabad)","Pantnagar","Saharanpur","Sonauli","Surajpur","Tikonia","Varanasi"]},
           {name: 'Uttarakhand', cities:["Almora","Badrinath","Bangla","Barkot","Bazpur","Chamoli","Chopra","DehraDun","Dwarahat","Garhwal","Haldwani","Hardwar","Haridwar","Jamal","Jwalapur","Kalsi","Kashipur","Mall","Mussoorie","Nahar","Naini","Pantnagar","Pauri","Pithoragarh","Rameshwar","Rishikesh","Rohni","Roorkee","Sama","Saur"]},
           {name:'West Bengal' , cities:["Alipurduar","Bankura","Bardhaman","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kolkata","Maldah","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"]},
           
          //{name: , cities:[]},

           
        ]
      });
    }

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({cities : this.state.countries.find(cntry => cntry.name === event.target.value).cities});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).cities;
	//	this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	}

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          //fields["username"] = "";
         
          fields["name"] = "";
          fields["mobileno"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          fields["address"] = "";
         fields["pin"] = "";

          this.setState({fields:fields});
          this.props.history.push("/Login")
          // alert("Registration submitted successfully");
      }
    }
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your address.";
      }
      if (typeof fields["address"] !== "undefined") {
        if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["address"] = "*Please enter alphabet characters only.";
        }
      }
     

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter email ID";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["pin"]) {
        formIsValid = false;
        errors["pin"] = "*Please enter Pin code.";
      }

      if (typeof fields["pin"] !== "undefined") {
        if (!fields["pin"].match(/^[0-9]{6}$/)) {
          formIsValid = false;
          errors["pin"] = "*Please enter valid Pin code";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }

      
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    onblur=(e)=>{
      var errors={}
      if(e.target.value==""){
       errors[e.target.name]="Please enter valid value"
       document.getElementsByName([e.target.name])[0].focus();
      }
      this.setState({errors:errors})
      
    }
    keypress=()=>{
      this.setState({errors:""})
    }

    onclick=()=>{
       
    }

  render() {
    console.log(this.state.errors)
    return (
    <div id="main-registration-container">
  <div id="register">
    {/* <h3>Registration page</h3> */}
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index2.html"><b>JOKESTER</b></a>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Register a new membership</p>
          <form action="../../index.html" method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>

          {/* <div className="input-group mb-3"> */}
            <div className=" mb-3">
              <input type="text" className="form-control" placeholder="Full Name" name="name" onSubmit={this.state.fields.name} onBlur={this.onblur}  onChange={this.handleChange} />
              <div classname="errorMsg">{this.state.errors.name}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div> */}
            </div>
            <div className=" mb-3">
              <input type="text" className="form-control" placeholder="Mobile No." name="mobileno" onSubmit={this.state.fields.mobileno} onBlur={this.onblur}  onChange={this.handleChange}  />
              <div classname="errorMsg">{this.state.errors.mobileno}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-mobile" aria-hidden="true" />
                </div>
              </div> */}
            </div>
            <div className=" mb-3">
              <input type="email" className="form-control" placeholder="Email" name="emailid" onSubmit={this.state.fields.emailid} onChange={this.handleChange} onBlur={this.onblur}  />
              <div classname="errorMsg">{this.state.errors.emailid}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div> */}
            </div>
            <div className=" mb-3">
              <input type="password" className="form-control" placeholder="Password" name="password" onSubmit={this.state.fields.password} onChange={this.handleChange} onBlur={this.onblur}  />
              <div classname="errorMsg">{this.state.errors.password}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div> */}
            </div>
            <div className=" mb-3">
              <input type="password" className="form-control" placeholder="Retype password" name="password" onSubmit={this.state.fields.password} onChange={this.handleChange} onBlur={this.onblur}  />
              <div classname="errorMsg">{this.state.errors.password}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div> */}
            </div>
            <div className=" mb-3">
              <input type="text" className="form-control" placeholder="Address" name="address" onSubmit={this.state.fields.address} onChange={this.handleChange} onBlur={this.onblur}  />
              <div classname="errorMsg">{this.state.errors.address}</div>
              {/* <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fa fa-map-marker" />
                </div>
              </div> */}
            </div>
            <label>Type of Supplier</label>
        <select class="dropdown" className="drop" id="Supp">
         
        <option value="" >--supplier type--</option>
        <option value="0">Trader</option>
            <option value="1">Manufacturer</option>
            <option value="2">wholesaler</option>
            <option value="3">retailer</option>
      </select>
     

      <label>Number of member</label>
        <select class="dropdown" className="drop"  >
       <option value="">--Number of member--</option>
            <option value="0">0-5</option>
            <option value="1">5-10</option>
            <option value="2">10-20</option>
            <option value="3">20-50</option>
      </select>
      <div className="errorMsg">{this.state.errors.pin}</div>

            <label>state</label>
					<select placeholder="Country" className="drop" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>--Choose satate--</option>
           {this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>

    
            <label>city</label>
					<select placeholder="State" className="drop" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose city--</option>
            {this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>

          <label>PIN Code:</label>
        <input type="text" className="form-control" name="pin" placeholder="000000" value={this.state.fields.pin} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.pin}</div>
        
        {/* <input type="submit" className="button"  value="Register"/> */}
        <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
            <label htmlFor="agreeTerms">
              I agree to the <a href="#">terms</a>
            </label>
          </div>
        </div>
        <div className="col-4">
          <Button type="submit" className="btn btn-primary btn-block"
                  >
                  Register
                </Button>
        </div>
        
              </div>
    
          </form>
        </div>
      </div>
      
        {/* /.col */}
        {/* <div className="col-4">
          <Button type="submit" className="btn btn-primary btn-block"
                  >
                  Register
                </Button>
              </div> */}
          
        {/* /.col */}
      
      {/* <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      <a href="login.html" className="text-center">I already have a membership</a> */}
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>

      );
  }


}


export default  withRouter(Registration);