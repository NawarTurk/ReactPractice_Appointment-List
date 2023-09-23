import { BiCalendar, BiTrash} from 'react-icons/bi';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import importedAppointmentList from './data.json';


function App() {
const [appointmentList, setAppointmentList] = useState([]);

const [searchTerm, setSearchTerm] = useState('');

const filteredAppointmentList = appointmentList.filter(
  appointment => {
    return (
      appointment.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.aptNotes.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
)


useEffect(() => {
  setAppointmentList(importedAppointmentList)
}, []);


  return (
    <div className="App container mx-auto mt-3 font-thin ">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top"/>Your Appointments</h1>
        <AddAppointment />
        <Search 
          searchTerm = {searchTerm}
          onSearchTermChange ={searchTerm => setSearchTerm(searchTerm)}
        />

        <ul className="divide-y divide-grey-200">
          {filteredAppointmentList
            .map(appointment => (
              <AppointmentInfo key={appointmentList.id}
              appointment={appointment}
              onDeleteAppointment={
                id => 
                  setAppointmentList(appointmentList.filter(appointment =>
                    appointment.id !== id))}
              />
            ))}
        </ul>
   </div>

  );
}

export default App;
