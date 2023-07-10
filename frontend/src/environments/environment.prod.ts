export const environment = {
  production: true,
  appInsights: {
    instrumentationKey: '04dc1ea3-cee7-48ec-8042-8c736ac75cd5',
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
