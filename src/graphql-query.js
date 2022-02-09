export const BACKEND_DATA_QUERY = `
{
  eventtypes {
    id
    title
    events {
      id
      title
    }
  }
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
    filesAttachment
    comments
  }
  latestupdates {
    id
    title
    startDate
    endDate
    link
  }
  documents {
    id
    title
    description
    documentLink
    image
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
    image
    link
  }
  categories {
    id
    title
  } 
  people {
    id
    name
    designation
    image
    description
    socialLinks
    category {
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
    image
    applyLink
    deadline
  }
  collaboration {
    id
    title
    description
    image
    link
  }
}
`;
