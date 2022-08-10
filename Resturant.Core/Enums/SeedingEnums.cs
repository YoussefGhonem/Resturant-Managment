using System.ComponentModel;

namespace Resturant.Core.Enums
{
    public enum ApplicationRolesEnum
    {
        Administrative = 1,
        Customer = 2,
    }

    public enum ItemStatusesEnum
    {
        InReview = 1,
        Costed = 2,
        AwaitingArrival = 3,
        InTransit = 4,
        Bonded = 5,
        PendingRelease = 6,
        Released = 7,
        Cancel = 8,
        // Pending Payment should be between In Transit and Bonded
        PendingPayment = 9,
    }

    public enum DocumentTypesEnum
    {
        [Description("EX3/IM4")]
        EX3IM4 = 0,
        [Description("IM7")]
        IM7 = 1,
    }

}
