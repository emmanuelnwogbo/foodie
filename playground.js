const Contact = ({ name, email, phone, address, suite, city, state, zip }) => <div className="contact">
  <div>{ name }</div>
  <div>{ email }</div>
  <div>{ phone }</div>
  <div>{ address } { suite }</div>
  <div>{ city } { state }, { zip }</div>
</div>

class ContactList extends React.Component {
  state = {
    contacts: [],
    per: 8,
    page: 1,
    totalPages: null,
    scrolling: false
  }

  componentWillMount() {
    this.loadContacts();
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = (e) => {
    const { scrolling, totalPages, page } = this.state
    if (scrolling) return 
    if (totalPages <= page) return
    const lastLi = document.querySelector('ul.contacts > li:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight
    let bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore()
  }

  loadContacts = () => {
    const { per, page, contacts } = this.state;
    const url = `https://student-example-api.herokuapp.com/v1/contacts.json?per=${per}&page=${page}`
    axios.get(url)
      .then(res => this.setState({
      contacts: [...contacts, ...res.data.contacts],
      scrolling: false,
      totalPages: res.data.total_pages
    }))
  }
  
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      scrolling: true,
    }), this.loadContacts)
  }

  render() {
    return (
      <div>
        <ul className="contacts">
      {
        this.state.contacts.map(contact => <li key={contact.id}>
          <Contact {...contact} />
        </li>)
      }
    </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Contacts</h1>
        <ContactList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
console.log('hey')