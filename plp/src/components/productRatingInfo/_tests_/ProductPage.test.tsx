import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProductRatingInfo from "../productRatingInfo";

describe("ProductRatingInfo", () => {
  it("renders rating, review count, and part number correctly", () => {
    const mockProps = {
      ratingValue: 4.5,
      reviewCount: 123,
      partNumber: "XYZ123",
    };

    render(<ProductRatingInfo {...mockProps} />);

    // Rating value with review count and part number should be in the document
    expect(screen.getByText("4.5 (123) | Item # XYZ123")).toBeInTheDocument();
  });
});
