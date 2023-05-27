
import Profile from './Profile'

const ViewProfile = () => {

const data = JSON.parse(localStorage.getItem('form')); 
  return (
    <div className="profile bg-indigo">
      <Profile
        avatar={data.pic}
        firstname={data.firstName}
        lastname={data.lastName}
        email={data.email}
      />
    </div>
  );
}

export default ViewProfile
