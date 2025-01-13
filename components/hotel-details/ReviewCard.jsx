import { getDateFormatForComment } from "@/utils/getDateFormat";
import { FaStar } from "react-icons/fa6";
import ProfileImgDemo from "../common/ProfileImgDemo";
import Options from "./Options";

const ReviewCard = ({ review, owner }) => {
  return (
    <div className="relative space-y-4 right-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <ProfileImgDemo />
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-medium">{review?.userId?.name}</h4>
            {owner && (
              <div className="flex py-1 px-2 items-center rounded-sm bg-primary/70 text-white ml-2 text-xs">
                Your review
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm">
            {getDateFormatForComment(review?.createdAt)}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        {Array.from({ length: review?.rating }, (_, index) => (
          <FaStar key={index} className="text-yellow-500 size-5" />
        ))}

        {Array.from({ length: 5 - +review?.rating }, (_, index) => (
          <FaStar key={index} className="text-gray-300 size-5" />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed">{review?.review}</p>

      {owner && (
        <Options
          reviewId={review?._id.toString()}
          rating={review?.rating}
          review={review?.review}
        />
      )}
    </div>
  );
};

export default ReviewCard;
