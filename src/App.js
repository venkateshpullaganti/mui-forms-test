import CustomerFeedbackForm from "./CustomerFeedbackForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center"
        }}
      >
        Customer Feedback Form
      </h1>
      <CustomerFeedbackForm />
    </div>
  );
}
