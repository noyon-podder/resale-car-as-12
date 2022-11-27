import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({bookingCar, setBookingCar}) => {
    const {user} = useContext(AuthContext)
    const {resalePrice, name, image} = bookingCar;


        const handleBookingModal = event => {
            event.preventDefault();

            const form = event.target;
            const userEmail = form.email.value;
            const userName = form.displayName.value;
            const productName = form.productName.value;
            const productPrice =parseFloat(form.resalePrice.value);
            const phoneNumber = form.contactNo.value;
            const location = form.location.value;
            
          console.log(productPrice)
            const bookingData = {
                userEmail,
                userName,
                productName,
                productPrice,
                phoneNumber,
                location,
                image
            }

            console.log(bookingData)


            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(bookingData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setBookingCar(null);
                    toast.success('Booking Completed')
                    form.reset();
                }
                console.log(data)
            })
        }


    return (
        <div>
           
            <input type="checkbox" id="booking-category-car" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-category-car" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleBookingModal}>
                <div className="form-control mt-5 mb-3">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                 value={user.email}
                 disabled
                  name="email"
                  className="input input-bordered"
                />
              </div>
                <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                 value={user.displayName}
                 disabled
                  name="displayName"
                  className="input input-bordered"
                />
              </div>
                <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                 value={name}
                 disabled
                  name="productName"
                  className="input input-bordered"
                />
              </div>
                <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="text"
                 value={resalePrice}
                 disabled
                  name="resalePrice"
                  className="input input-bordered"
                />
              </div>
                <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Contact No</span>
                </label>
                <input
                  type="text"
                  name="contactNo"
                  className="input input-bordered"
                  required
                />
              </div>
                <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Meeting Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-4">
                <button type='submit' className="btn btn-error text-white">Submit</button>
              </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;