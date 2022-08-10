namespace Resturant.Core.Enums
{
    public enum UserStatusEnum
    {
        Active,
        NotActive

    }
    public enum SteerPosition
    {
        LHD = 1,
        RHD = 2
    }
    public enum FrequencySettingEnum
    {
        Hourly = 1,
        Daily = 2,
        Monthly = 3,
        Quarterly = 4,
        Yearly = 5,
    }

    public enum CategoriesEnum
    {
        Duty = 1,
        NonDuty = 2,
    }

    public enum DashboardEnum
    {
        LastMonth = 1,
        LastQuarter = 2,
        LastYear = 3,
    }

    public enum FrequencyEnum
    {
        Year = 1,
        Quarter = 2,
        Month = 3,
        Week = 4,
        LastWeek = 5
    }
}
