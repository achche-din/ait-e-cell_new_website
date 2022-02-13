export const BACKEND_DATA_QUERY = `
{
  events {
    id
    title
    description
    startDate
    endDate
    imageUrl
    meetUrl
    eventType {
      id
      title
    }
    others
    comments
    tags{
      id
      title
    }
  }
  latestupdates {
    id
    title
    startDate
    endDate
    link
  }
  videos {
    id
    title
    description
    videoLink
  }
  startups {
    id
    title
    description
    imageLink
    documentLink
    website
  }
  tags {
    id
    title
  } 
  people {
    id
    name
    designation
    description
    imageLink
    linkedin
    instagram
    tags{
      id
      title
    }
    isActive
    batch
  } 
  links {
    id
    title
    link
    description
    logoUrl
  }
  internships {
    id
    title
    companyLink
    description
    imageLink
    applyLink
    deadline
  }
  collaboration {
    id
    title
    description
    imageLink
    website
  }
}
`;
