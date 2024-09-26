import { EventRepeatTypes, RepeatChangesTypes } from './types'

export const getInitialUserEvents = () => {
  return {
    'Amit-1234': ['event-0', 'event-1', 'event-2', 'event-3'],
    'Rajesh-1234': [],
    'Priya-1234': [],
    'Sonal-1234': [],
    'Anjali-1234': [],
    'Rohit-1234': [],
  }
}

export const getInitialEvents = () => {
  return {
    'event-0': {
      eventUid: 'event-0',
      eventCreatorUid: 'Amit-1234',
      eventGroupUid: null,
      startDate: (new Date(2021, 7, 26, 22, 30)).toString(),
      endDate: (new Date(2021, 7, 26, 23, 30)).toString(),
      title: 'Team Meeting',
      description: 'Project planning and discussion',
      themeColor: 0,
      location: 'Office Conference Room',
      invites: [],
      isAllDay: false,
      createdAt: (new Date(2021, 7, 26, 22, 30)).toString(),
    },
    'event-1': {
      eventUid: 'event-1',
      eventCreatorUid: 'Amit-1234',
      eventGroupUid: 'group-0',
      startDate: (new Date(2021, 7, 25, 13, 30)).toString(),
      endDate: (new Date(2021, 7, 25, 14, 30)).toString(),
      title: 'Client Presentation',
      description: 'Review presentation with the client',
      themeColor: 0,
      location: 'Zoom Call',
      invites: [],
      isAllDay: false,
      createdAt: (new Date(2021, 7, 26, 22, 30)).toString(),
    },
    'event-2': {
      eventUid: 'event-2',
      eventCreatorUid: 'Amit-1234',
      eventGroupUid: null,
      startDate: (new Date(2021, 7, 26, 22, 30)).toString(),
      endDate: (new Date(2021, 7, 29, 23, 30)).toString(),
      title: 'Weekend Workshop',
      description: 'Skill development workshop for team members',
      themeColor: 0,
      location: 'Mumbai',
      invites: [],
      isAllDay: false,
      createdAt: (new Date(2021, 7, 26, 22, 30)).toString(),
    },
    'event-3': {
      eventUid: 'event-3',
      eventCreatorUid: 'Amit-1234',
      eventGroupUid: null,
      startDate: (new Date(2021, 7, 25, 0, 0)).toString(),
      endDate: (new Date(2021, 7, 25, 23, 59)).toString(),
      title: 'Annual Company Day',
      description: 'Company-wide celebration and team activities',
      themeColor: 0,
      location: 'Goa',
      invites: [],
      isAllDay: true,
      createdAt: (new Date(2021, 7, 26, 22, 30)).toString(),
    },
  }
}

export const getInitialEventGroups = () => {
  return {
    'group-0': {
      groupUid: 'group-0',
      repeatType: EventRepeatTypes.WEEKLY,
      repeatChanges: {
        '2021-8-29': {
          type: RepeatChangesTypes.CHANGE,
          payload: {
            title: 'Changed Meeting Agenda'
          }
        }
      }
    }
  }
}

export const getInitialInvited = () => {
  return {
    'Amit-1234': [],
    'Rajesh-1234': [],
    'Priya-1234': [],
    'Sonal-1234': [],
    'Anjali-1234': [],
    'Rohit-1234': [],
  }
}

export const getInitialEventInvites = () => {
  return {
    'event-0': [
      {
        userUid: 'Rajesh-1234',
        status: 0
      }
    ]
  }
}

export const getInitialUsers = () => {
  return {
    'Amit-1234': {
      userUid: 'Amit-1234',
      displayName: 'Amit Kumar',
      email: 'amit.kumar@example.com',
      photoUrl: 'https://gravatar.com/avatar/a0d8d243f742b92b6016de3e191d8dcb?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    },
    'Rajesh-1234': {
      userUid: 'Rajesh-1234',
      displayName: 'Rajesh Gupta',
      email: 'rajesh.gupta@example.com',
      photoUrl: 'https://gravatar.com/avatar/b1c4c4f1f54fbb9c9e5090f8b451fe77?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    },
    'Priya-1234': {
      userUid: 'Priya-1234',
      displayName: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      photoUrl: 'https://gravatar.com/avatar/d204e93fd8329a75a64fe3400f787f36?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    },
    'Sonal-1234': {
      userUid: 'Sonal-1234',
      displayName: 'Sonal Singh',
      email: 'sonal.singh@example.com',
      photoUrl: 'https://gravatar.com/avatar/e627becc1105673dfd12c6d832d8e050?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    },
    'Anjali-1234': {
      userUid: 'Anjali-1234',
      displayName: 'Anjali Patel',
      email: 'anjali.patel@example.com',
      photoUrl: 'https://gravatar.com/avatar/4d2b87d24e3f8c1ed377b1984b5a632f?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    },
    'Rohit-1234': {
      userUid: 'Rohit-1234',
      displayName: 'Rohit Mehra',
      email: 'rohit.mehra@example.com',
      photoUrl: 'https://gravatar.com/avatar/2c6a0b9fa6439b74bc43b3f617fbe921?s=400&d=identicon&r=x',
      timezone: 'Asia/Kolkata',
      defaultThemeColor: 0,
      friendsUidList: []
    }
  }
}
