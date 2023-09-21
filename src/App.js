import { BiCalendar, BiTrash} from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import appointmentList from './data.json';


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin ">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/>Your Appointments</h1>
        <AddAppointment />
        <Search />

        {/* <ul class="divide-y divide-grey-200">
          {appointmentList
            .map(appointment => (
              <AppointmentInfo key={appointmentList.id}
              appointment={appointment}/>
            ))}
        </ul> */}
   </div>

  );
}

export default App;
