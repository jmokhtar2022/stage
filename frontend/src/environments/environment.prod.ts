export const environment = {
  production: true,
  appInsights: {
    instrumentationKey: '9eaf99b6-eaec-45aa-94a3-c1699cc6523e',
    config: {
      autoTrackPageVisitTime: true,
      enableAvailabilityMonitoring: true,
      disableFetchTracking: false,
      disableCorrelationHeaders: false,
      disableAjaxErrorTracking: false,
      disableExceptionTracking: false,
      enableAutoRoutePings: true,
    }
}
};
export const apiUrl = '//20.82.252.225:8080/api';
