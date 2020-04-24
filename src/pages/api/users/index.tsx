import { NextApiRequest, NextApiResponse } from 'next';
import axios  from 'axios';

import { USER_TOKEN } from '../../../constant';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies[USER_TOKEN]; 
  try {
    const getCurrentUserResponse = await axios(process.env.BACK_END_URL + '/api/users', {
      headers: {
        Authorization: token,
      },
    });

    res.statusCode = getCurrentUserResponse?.status;
    res.send(getCurrentUserResponse?.data);
  } catch(error) {
    if(error?.response?.data) {
      res.statusCode = error.response.status;
      res.json(error.response.data);
    } else {
      res.json(error);
    }
  }
}
