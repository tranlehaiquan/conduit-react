import { NextApiRequest, NextApiResponse } from 'next';
import axios  from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const loginUserResponse = await axios.post(process.env.BACK_END_URL + '/api/users/login', {
      ...req.body
    });

    res.statusCode = loginUserResponse?.status;
    res.send(loginUserResponse?.data);
  } catch(error) {
    if(error?.response?.data) {
      res.statusCode = error.response.status;
      res.json(error.response.data);
    } else {
      res.json(error);
    }
  }
}
