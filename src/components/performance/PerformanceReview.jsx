import { useEffect, useState } from "react";
import performanceApi from "../../api/performanceApi";
import Table from "../common/Table";
import InputField from "../common/InputField";
import Button from "../common/Button";

const PerformanceReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({ employeeId: "", reviewText: "" });

  useEffect(() => {
    performanceApi.getEmployeePerformance(reviewData.employeeId).then(setReviews).catch(console.error);
  }, [reviewData.employeeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await performanceApi.submitReview(reviewData);
      alert("Performance review submitted!");
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Performance Reviews</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <InputField label="Employee ID" type="text" name="employeeId" value={reviewData.employeeId} onChange={(e) => setReviewData({ ...reviewData, employeeId: e.target.value })} />
        <InputField label="Review" type="text" name="reviewText" value={reviewData.reviewText} onChange={(e) => setReviewData({ ...reviewData, reviewText: e.target.value })} />
        <Button text="Submit Review" type="submit" className="mt-2" />
      </form>

      <Table columns={["Reviewer", "Feedback", "Date"]} data={reviews} />
    </div>
  );
};

export default PerformanceReview;
