import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCalendarSettings, setTargetDate } from '../reducers/calendar/calendarSettingSlice';
import { resetCalendarEvents } from '../reducers/calendar/calendarSlice';
import { setDB } from '../reducers/dbSlice';
import { setCurrentUser } from '../reducers/userSlice';
import { getInitialEventGroups, getInitialEventInvites, getInitialEvents, getInitialInvited, getInitialUserEvents, getInitialUsers } from '../utils/data';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isDBLoaded = useSelector(state => state.db.isDBLoaded);
  const { userDB } = useSelector(state => state.db.db);

  useEffect(() => {
    dispatch(resetCalendarEvents());
    dispatch(resetCalendarSettings());
  }, []);

  useEffect(() => {
    if (!isDBLoaded) {
      console.log('Load DB Data');
      dispatch(setDB({
        userDB: getInitialUsers(),
        userEventDB: getInitialUserEvents(),
        eventDB: getInitialEvents(),
        invitedDB: getInitialInvited(),
        eventGroupDB: getInitialEventGroups(),
        eventInviteDB: getInitialEventInvites(),
      }));
    }
  }, [isDBLoaded, dispatch]);

  const loginWithUser = (uid) => {
    dispatch(setTargetDate(Date()));
    dispatch(setCurrentUser(userDB[uid]));
    router.push('/calendar/day');
  };

  return (
    <div>
      <Head>
        <title>TimeSync</title>
        <meta name="description" content="Kalendar - Simplified Google Calendar Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100">
        <div className="max-w-screen-sm p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-start mb-6">
            <Image src="/google-calender.png" height="32px" width="32px" alt="calendar-icon" />
            <p className="ml-4 text-2xl font-bold text-gray-700">TimeSync</p>
          </div>
          <p className="text-lg font-semibold text-gray-700">Welcome to TimeSync</p>
          <p className="pb-4 text-gray-500 border-b">
            A simplified Google Calendar clone built with Next.js. This is an offline version where data is pre-populated using Redux.
          </p>
          <p className="mt-4 text-gray-600">
            You can log in with any user below to explore the calendar. Email functionality is limited to the users in this list.
          </p>
          <div className="mt-8">
            <p className="pb-2 font-semibold text-gray-400 border-b">
              Choose a user to log in:
            </p>
            <div className="mt-4 space-y-2">
              {Object.keys(userDB).map((uid) => {
                const { displayName, email, photoUrl } = userDB[uid];
                return (
                  <div
                    key={uid}
                    className="flex justify-between px-4 py-2 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                    onClick={() => loginWithUser(uid)}
                  >
                    <div className="flex items-center">
                      <Image
                        src={photoUrl}
                        width="30px"
                        height="30px"
                        alt="user-icon"
                        className="rounded-full"
                      />
                      <p className="ml-3 font-medium text-gray-600">{displayName}</p>
                    </div>
                    <p className="text-gray-400">{email}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
