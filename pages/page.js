import { useState } from 'react';
import Layout from './layout';

export default function Page() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle expense submission
    console.log('Expense submitted:', { description, amount });
    // Reset form fields
    setDescription('');
    setAmount('');
  };

  return (
    <Layout>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </Layout>
  );
}
