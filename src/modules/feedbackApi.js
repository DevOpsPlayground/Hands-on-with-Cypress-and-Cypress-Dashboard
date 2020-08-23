import submit from '../api/submit';

export const postFeedback = feedback => {
    return submit.post(feedback);
};
