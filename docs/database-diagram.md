# Database Diagram (ERD)

## Social Media Dashboard Database Schema

```
┌─────────────────────────┐         ┌─────────────────────────┐
│          User           │         │        Platform         │
├─────────────────────────┤         ├─────────────────────────┤
│ _id: ObjectId           │         │ _id: ObjectId           │
│ name: String            │         │ name: String            │
│ email: String           │         │ type: String            │
│ password: String        │         │ userId: ObjectId        │◄─────┐
│ role: String            │         │ accessToken: String     │      │
│ company: String         │         │ refreshToken: String    │      │
│ createdAt: Date         │◄────────┤ tokenExpiry: Date       │      │
│ updatedAt: Date         │         │ profileId: String       │      │
└─────────────────────────┘         │ profileName: String     │      │
                                    │ createdAt: Date         │      │
                                    │ updatedAt: Date         │      │
                                    └─────────────────────────┘      │
                                                                     │
                                                                     │
┌─────────────────────────┐         ┌─────────────────────────┐     │
│        Activity         │         │          Stats          │     │
├─────────────────────────┤         ├─────────────────────────┤     │
│ _id: ObjectId           │         │ _id: ObjectId           │     │
│ platformId: ObjectId    │◄────────┤ platformId: ObjectId    │     │
│ userId: ObjectId        │◄────────┤ userId: ObjectId        │─────┘
│ type: String            │         │ date: Date              │
│ content: String         │         │ followers: Number       │
│ mediaUrl: String        │         │ followersChange: Number │
│ externalId: String      │         │ posts: Number           │
│ engagement: {           │         │ engagement: Number      │
│   likes: Number         │         │ impressions: Number     │
│   comments: Number      │         │ reach: Number           │
│   shares: Number        │         │ demographics: {         │
│   impressions: Number   │         │   ageGroups: Array      │
│   reach: Number         │         │   genderSplit: Object   │
│ }                       │         │   locations: Array      │
│ publishedAt: Date       │         │ }                       │
│ createdAt: Date         │         │ createdAt: Date         │
│ updatedAt: Date         │         │ updatedAt: Date         │
└─────────────────────────┘         └─────────────────────────┘
```

## Entity Relationships

1. **User to Platform**: One-to-Many
   - A user can connect multiple social media platforms
   - Each platform belongs to a single user

2. **Platform to Activity**: One-to-Many
   - A platform can have multiple activities (posts, comments, etc.)
   - Each activity belongs to a single platform

3. **Platform to Stats**: One-to-Many
   - A platform can have multiple stat records (daily/weekly/monthly)
   - Each stat record belongs to a single platform

4. **User to Activity**: One-to-Many
   - A user can have multiple activities across all platforms
   - Each activity belongs to a single user

5. **User to Stats**: One-to-Many
   - A user can have multiple stat records across all platforms
   - Each stat record belongs to a single user

## Data Model Details

### User
- Stores user account information
- Includes authentication details and user role
- Tracks when the user was created and last updated

### Platform
- Represents a connected social media platform
- Stores authentication tokens for API access
- References the user who owns the platform
- Includes platform-specific profile information

### Activity
- Represents social media activities (posts, comments, etc.)
- References both the platform and user
- Stores engagement metrics for each activity
- Includes timestamps for when the activity was published and recorded

### Stats
- Stores performance statistics for each platform
- References both the platform and user
- Includes follower counts, engagement rates, and reach metrics
- Can store demographic information about the audience
- Tracks when the stats were recorded and last updated
