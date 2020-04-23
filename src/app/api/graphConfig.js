export const graphConfig = {
  graphMeEndpoint: () => "https://graph.microsoft.com/v1.0/me",
  graphMailEndpoint: () => "https://graph.microsoft.com/v1.0/me/messages",
  graphMeDriveEndpoint: () => "https://graph.microsoft.com/v1.0/me/drive",
  graphMeDrivesOverviewEndpoint: () => "https://graph.microsoft.com/v1.0/me/drives",
  graphMeDrivesEndpoint: (driveId) => `https://graph.microsoft.com/v1.0/me/drives/${driveId}`,
  graphMeDrivesChildrenEndpoint: (driveId) => `https://graph.microsoft.com/v1.0/me/drives/${driveId}/root/children`,
};
