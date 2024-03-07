import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using map</p>
      <div className="tripcard">
        <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Tours And Travel Malaysia - Top Results, Find More at Searchmixer. Find The Best Results Now. Find Tours And Travel Malaysia. Search at Searchmixer and Find Answers. 100+ Unique Results. Quick Answers. Find in Seconds. Explore the Best Info Now. Useful & Relevant."
        />
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Be surprised by how many places you have been and where you could go next with UOB Cards. Take this travel Quiz To Find Out How Many Places You've Been To. Travel deals await! Grab This Promo Code. Plan Your Next Trip. Plan A Holiday. Exclusive Travel Deals. Hassle-Free Travel Plans. Recommended Destinations. Travel Itineraries. Travel Escape Deals. Travel Inspirations."
        />
        <TripData
        image={Trip3}
        heading="Trip in France"
        text="We'll find the perfect Paris honeymoon apartment for your upcoming getaway. US Based Agency. 24/7 Local Guest Support. Paris Travel Experts. Full Property Management. Fully Furnished Rentals. English & French Speakers. Rentals Near Eiffel Tower. Make Instant Bookings. Paris Locals On Staff. Personal Booking Advisors. Types: 1 Bedroom, 2 Bedrooms, 3 Bedrooms, 4 Bedrooms.
        Marais Tournelles
        -
        from US$142.00/day
        Modern, one bedroom."
        />
      </div>
    </div>
  );
}

export default Trip;
